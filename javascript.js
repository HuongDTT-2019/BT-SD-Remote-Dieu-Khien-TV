function Remote() {
    this.chanel = 0;
    this.volume = 0;
    this.getChanel = function () {
        return this.chanel;
    };
    this.setChanel = function (chanel) {
        this.chanel = chanel;
    };
    this.getVolume = function () {
        return this.volume;
    };
    this.setVolume = function (volume) {
        this.volume = volume;
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOf = function () {
        this.status = false;
    }

}

function Television(volume, chanel) {
    this.volume = volume;
    this.chanel = chanel;
    this.connectRemote = function (remote) {
        this.chanel = remote.chanel;
        this.volume=remote.volume;
        this.status=remote.status;
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOf = function () {
        this.status = false;
    };
    this.getStatus = function () {
        if (this.status) {
            console.log("On");
        } else {
            console.log("Off");
        }
    };
    this.getChanel = function () {
        return this.chanel;
    };
    this.setChanel = function (chanel) {
        this.chanel = chanel;
    };
    this.getVolume = function () {
        return this.volume;
    };
    this.setVolume = function (volume) {
        this.volume = volume;
    }
}

let television1 = new Television(10, 10);
let remote1 = new Remote();

television1.turnOn();
console.log(television1.getChanel());
television1.getStatus();

television1.setChanel(7);
console.log(television1.getChanel());

remote1.setChanel(3);
television1.connectRemote(remote1);
console.log(television1.getChanel());

television1.setVolume(television1.getVolume()+2);
console.log(television1.getVolume());

remote1.turnOf();
television1.connectRemote(remote1);
television1.getStatus();
