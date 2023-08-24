let name = 'ศักรินทร์';

let rabbit = {
    name: 'Mimi',
    breed: 'Lion Head',
    color: 'White',
    weight: 1.2,
    talk() {
        console.log(this.name + ', Oung Oung')
    },
    weightDetail() {
        if (this.weight < 1) {
            return 'น้อยเกิ๊นนนนนนนนน';
        }
        else if (this.weight > 2) {
            return 'มากเกิ๊นนนนนนนนน';
        }
        return 'ปกติจ้าาาาาา';
    }
};

console.log(rabbit.weightDetail());