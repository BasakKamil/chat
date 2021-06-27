import React, { Component } from 'react';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import smoke from '../images/loga/smoke1.png';
import stars from '../images/loga/star.png';
import Foto1 from '../Background/logawww/cn1.jpg';
import Foto2 from '../Background/logawww/cn2.jpg';
import Foto3 from '../Background/logawww/cn1.jpg';
import Foto4 from '../Background/logawww/cn3.jpg';

export class ThreeBack extends Component {
    constructor(props){
        super(props);
        this.foto = [Foto1, Foto2, Foto3, Foto4];
        this.animate = this.animate.bind(this);
        this.addCube = this.addCube.bind(this);
       
        this.state = {
            // Express Login- backend
            apiResponse : "",
            loggedIn : false ,
            products: [],
            editMode : false
        };
        this.cloudParticles = [];


    
    
    }

  

    kamil = (texture) => {
        this.cloudGeo = new THREE.PlaneBufferGeometry(400,400);
        this.cloudMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true
        });
        for(let p=0; p<60; p++){
           
           
            this.cloud = new THREE.Mesh(this.cloudGeo, this.cloudMaterial);
            this.cloud.position.set(
                Math.random()*1600 - 1000,
                400,
                Math.random() *1400 - 1400
            ); 
            this.cloud.rotation.x = 1.16;
            this.cloud.rotation.y = -0.12;
            this.cloud.rotation.z = Math.random()*2*Math.PI;
            this.cloud.material.opacity = 0.75;
            this.cloudParticles.push(this.cloud);
            this.scene.add(this.cloud); 
        }   
    }

    stars = (texture) =>{

        // Utworze sobie geometrie do schowania gwiazd
        this.starGeo = new THREE.PlaneBufferGeometry();
        for(let i=0;i<6000; i++){
            this.star = new THREE.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            );
            this.starGeo.vertices.push(this.star);
        }
        
        this.starMaterial = new THREE.MeshLambertMaterial({
            color: 0xaaaaaa,
            size: 0.7,
            map: texture
        });
        this.stars = new THREE.Mesh(this.starGeo, this.starMaterial);
        this.scene.add(this.stars);

    }
    pushBox = () => {
        
        for(let j=0; j<this.foto.length;j++){
           
            this.start = window.innerWidth / this.foto.length;
        
            this.cloudGeo[j] = new THREE.BoxGeometry(8,8,8);
            this.cloudMaterial[j] = [
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(this.foto[j]), side: THREE.DoubleSide})
              ];
            this.box[j] = new THREE.Mesh(this.cloudGeo[j], this.cloudMaterial[j]);
            this.box[j].position.set(-this.start/15 +j*20,30,-30);
            this.addCube(this.box[j]);
        } 
    }
    box = (Foto1) =>{

        // Utworze sobie schemat do boxów stron wwww
        // this.box = new THREE.BoxGeometry( 7, 7, 7 );
        this.boxmaterial =  [
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide})
          ];
        this.boxown= new THREE.Mesh(this.box, this.boxmaterial);
        this.boxown.position.set(0,30,-30);
        this.addCube(this.boxown);
      
       
       

    }
    superSztorm = () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(70,this.width / this.height,1,1000 );
        this.camera.position.set(0,0,0);

        this.camera.rotation.x = 1.12;
        this.camera.rotation.y = -0.12;
       
        // DODAJE ŚWIATŁA
        this.ambient = new THREE.AmbientLight(0x555555);
        this.directionalLight = new THREE.DirectionalLight(0xffeedd);
        this.directionalLight.position.set(0,0,1);
        this.flash = new THREE.PointLight(0x062d89, 30, 500 , 1.7);
        this.flash.position.set(200.300,100);
        this.scene.add(this.flash);
        this.scene.add(this.directionalLight);
        this.scene.add(this.ambient);
    
        this.renderer = new WebGLRenderer();
        this.renderer.setSize(this.width,this.height);
        this.scene.fog = new THREE.FogExp2(0x63c7f5,0.001);
        this.renderer.setClearColor(this.scene.fog.color);
        this.mount.appendChild(this.renderer.domElement);
    
        this.loader = new THREE.TextureLoader().load(smoke);
        this.loader2 = new THREE.TextureLoader().load(stars);
        this.kamil(this.loader);

        this.pushBox();
        this.animate();
       
    
    
    }

    // newText = () => {
    //     this.text = new THREE.TextGeometry( text, parameters );
        
    // }
    componentDidMount(){
     
        this.superSztorm();
        
     
     }
    animate = () =>{
        this.frameId = window.requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
       for(let j=0;j<this.foto.length;j++){
          this.box[j].rotation.z += 0.01;
       }
        this.cloudParticles.forEach(p=>{
            p.rotation.z -=0.01; 
        });
        if(Math.random() > 0.93 || this.flash.power > 100){
            if(this.flash.power < 100)
                this.flash.position.set(
                    Math.random()*400,
                    300 + Math.random() * 200,
                    100 
                );
                this.flash.power = 50 + Math.random() * 500;
    
            
        }
      }
      addCube(cube) {
        this.scene.add(cube);
      }
    render() {
        return (
            <div className="ThreeBack" ref={mount => this.mount = mount} style={{width,height}}></div>
        )
    }
}

const width = window.innerWidth;
const height = window.innerHeight;


export default ThreeBack