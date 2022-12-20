// document การเเสดงข้อมูลหน้า web html
document.write("<h1>Suphapong Namphumee</h1>");
document.write("<p>Suphapong Namphumee</p>");

// alert การเเสดงเป็นกล่องข้อมูล
alert("โปรดลงชื่อ");

// console เป็นการเเสดงข้อมูลทางหลังบ้าน

// console.log เป็นการเเสดงข้อผิดพลาดหรือการเเสลดงการดึง API มาใช่ // การเเสดง Debug 
console.log("Hello Javascript");
console.log("")
// เช็คความผิดพลาดของการเรียกใช่งาน
console.error("มีข้อผิดพลาด");
console.log("")
// เช็คความผิดพลาดหรือระบบไม่สามารถทำงาน
console.warn("ระบบบางอย่างไม่ทำงาน");
console.log("")
// ตัวเเปร
// การตั้งชื่อไม่สามารถตั้งชื่อ if else ifelse for เเต่สามารถใส่ _ / $ ได้เพื่อให่สามารถใช่ได้เช่น _for / $for
// var / let  ใช้งานเหมือนกันเเต่ let ใช้งานสะดวกกว่า ver
// console การเเสดงข้อมูลทางหลังบ้าน
// document การเเสดงข้อมูลทางหน้าผู้ใช้งาน
let name , age;       // การสร้างตัวเเปร
name = "suphapong"    // กำหนดข้อมูลในตัวเเปร name
age = 15              // กำหนดข้อมูลในตัวเเปร age
console.log(name ,"อายุ = ",age);    // การเรียกใช้ข้อมูลเพื่อเเสดงข้อมูล ทาง console 
document.write(name,"อายุ = ",age);  // การเรียกใช้ข้อมูลเพื่อเเสดงข้อมูล ทาง document 
console.log("")
// เเบบที่ 2 เเบบเก็บข้อมูลไวกับตัวเเปรเลย
let best = "Superbest" , ager = 15;
console.log(best ,"อายุ = ",ager);    // การเรียกใช้ข้อมูลเพื่อเเสดงข้อมูล ทาง console 
document.write(best,"อายุ = ",ager);  // การเรียกใช้ข้อมูลเพื่อเเสดงข้อมูล ทาง document 

// const ค่าคงที่ไม่สามารถเปลื่ยนได้

// การสร้างตัวเเปร const เวลากำหนดค่า const เเล้วไม่สามารถค่าเพิ่มใหม่ได้
const vat = 0.07; 
console.log(vat);
console.log("")
// ชนิดข้อมูล 

// Boolean = true / false 
// number = 1 การเเสดงตัวเลขเเบบมีทศนิยม
//          2 การเเสดงตัวเลขเเบบไม่มีทศนิยม
// string = ข้อความ
// Object = ข้อมูลเชิงวัดถุ
// Array = ชุดข้อมูล

// การเช็คชนิดข้อมูล
// typeof = การเช็คชนิดของข้อมูล
// nll = ไม่มีการกำหนดค่าจะถูกกำหลดโดย Dev
// undefined = ไม่มีการกำหนดค่าเป็นค่าเริ่มต้นของโปรเเกรม

// การจัดการตัวเลข
let money = 500;   // number (integer)
let price = 499.9; // number (float)
let message = 'Suphapong';
let namebro = "Best"
let checkname = true;
let checknikename = false;

console.log(money);  
console.log(typeof(money));  // การเช็คชนิดข้อมูล
console.log(price); 
console.log(typeof(price));  // การเช็คชนิดข้อมูล
console.log(message);
console.log(typeof(message));// การเช็คชนิดข้อมูล
console.log(namebro);
console.log(typeof(namebro));// การเช็คชนิดข้อมูล
console.log(checkname);
console.log(typeof(checkname));// การเช็คชนิดข้อมูล
console.log(checknikename);
console.log(typeof(checknikename));// การเช็คชนิดข้อมูล
console.log("")
// การเเปลงชนิดข้อมูล
// การเเปลง string --> number
let ages = +"15";
let agea = parseFloat("15") 
let agek = parseInt("15")
console.log(typeof(ages));// การเช็คชนิดข้อมูล
console.log(typeof(agea));// การเช็คชนิดข้อมูล
console.log(typeof(agek));// การเช็คชนิดข้อมูล
console.log("")
// การเเปลง number --> string
let ageb = 15+"";           // number (integer)
let agec = 15.5.toString(); // number (float)
console.log(typeof(ageb));  // การเช็คชนิดข้อมูล
console.log(typeof(agec));  // การเช็คชนิดข้อมูล
console.log("")

// การสร้าง Array Array / index จะเริ้่มต้นที่ 0
let numbergorupa = Array(1,2,"3",4,5,true);
console.log(numbergorupa);
console.log(numbergorupa[0]);
console.log(numbergorupa[1]);
console.log(numbergorupa[2]);
console.log(numbergorupa[3]);
console.log(numbergorupa[4]);
console.log(numbergorupa[5]);
console.log();

// เเบบที่ 2
let colors = ["เเดง","เงิน","ชมพู","ขาว",]
colors[0] = "ฟ้า"; // การเรียกตัวเเปรเปลี่ยนข้อมูล

console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log();


// 2:00:00