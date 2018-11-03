const name = "Mohan";

const height = 180;

function createObject() {
    return {
        name: this.name,
        height: this.height,
        aboutYourSelf() {
            console.log(`I am ${name}. I am ${height} cm height`);
        }
    };
}

var me = createObject();
console.log(me.aboutYourSelf());