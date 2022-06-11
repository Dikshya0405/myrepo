

//synchronous
/*const func2 = () => {
    console.log("hello");

};


const func1 = () => {
    console.log("Dikshya");
    func2();
    console.log("Sharma");

}

func1();*/

//asynchrous
///setttimeout is based on asynchronous functionality
const func2 = () => {
    setTimeout(() => {
        console.log("hello");
    }, 3000);

};


const func1 = () => {
    console.log("Dikshya");
    func2();
    console.log("Sharma");

}

func1();
