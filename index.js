let name = prompt("Enter Your Name", "Guest");
setTimeout(() => {
    let time = new Date();
    // console.log(time.getHours());
    if(time.getHours()<12 && time.getHours()>=0){
        alert("Good Moring, " + name + " Hope You are doing well. Welcome to our site, We provide best quality food at such an affordable price that you will not regret after ordering from our site.")
    }
    else if(time.getHours()>=12 && time.getHours()<=16){
        alert("Good Afternoon " + name + " Hope You are doing well. Welcome to our site, We provide best quality food at such an affordable price that you will not regret after ordering from our site.")
    }
    else if(time.getHours()>=16 && time.getHours()<=22){
        alert("Good Evening " + name + " Hope You are doing well. Welcome to our site, We provide best quality food at such an affordable price that you will not regret after ordering from our site.")
    }
    else if(time.getHours()>=22 && time.getHours()<24){
        alert("Hello " + name + " Hope You are doing well. Welcome to our site, We provide best quality food at such an affordable price that you will not regret after ordering from our site.")
    }
    
}, 4500);
let total = 0;
function explore(){
    let show = document.getElementById('intca')
        if(show.style.display!='none'){
            show.style.display = 'none';
        }else{
            show.style.display = 'flex';
        }
    }       
    function none(id1, id2,id3, price){
        let a = document.getElementById('amtbtn');
        let b = document.getElementById(id1);
        let c = document.getElementById(id2);
        let d = document.getElementById(id3);
        d.style.display = 'none';
        c.style.display = 'flex';
        b.innerHTML = parseInt(b.innerHTML) + 1;
        // a.style.display = 'none';
        total = total + price;
        a.innerHTML = total
    }

    function pay(id, id1,id2, ele , price){
        //  let b = document.getElementById(id1);
        //  console.log(parseInt(b));
             
        //  if(parseInt(b)>0){
            let b = document.getElementById(id1);
            let c = document.getElementById(id);
            let d = document.getElementById(id2);
            if(parseInt(b.innerHTML)>0){
        b.innerHTML = parseInt(b.innerHTML) + ele;
             let a = document.getElementById('amtbtn');
             total+=price;
        a.innerHTML = total
            }
            if(parseInt(b.innerHTML)==0){
                    c.style.display = 'none';
                    d.style.display = 'block';
            }
        //  }
    }
    function apay(){
        let reference = Math.random()*10000000;
        let d = parseInt(reference)
        alert("Rs " + total + " Paid Succesfully, Thanks for choosing us. Your order will be delivered shortly with reference number QO" +  d);
        // total = 0; 
        // let a = document.getElementById('disp1');
        // let b = document.getElementById('disp2');
        // let c = document.getElementById('disp3');
        // let d = document.getElementById('disp4');
        // let e = document.getElementById('disp5');
        // let f = document.getElementById('disp6');
        // let g = document.getElementById('disp7');
        // let h = document.getElementById('disp8');
        // let i = document.getElementById('disp9');
        // let j = document.getElementById('disp10');
        // a.innerHTML = 0;
        // b.innerHTML = 0;
        // c.innerHTML = 0;
        // d.innerHTML = 0;
        // e.innerHTML = 0;
        // f.innerHTML = 0;
        // g.innerHTML = 0;
        // h.innerHTML = 0;
        // i.innerHTML = 0;
        // j.innerHTML = 0;
        location.reload()

    }
