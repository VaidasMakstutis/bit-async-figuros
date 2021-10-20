class Figura {
    static randomFiguros(amount) {
        const result = [];
        for (let i = 0; i < amount; i++) {
            result[i] = {};

            result[i].width = Math.round(Math.random()*9) + 1;
            result[i].height = Math.round(Math.random()*9) + 1;

            console.log(result[i]);
        }
        return result;
    }

    static size(width, height) {
        return width * height;
    }
}

module.exports = Figura;