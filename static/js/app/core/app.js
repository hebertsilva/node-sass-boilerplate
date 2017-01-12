class App {
    constructor() {
        this.view = null;
    }

    init(View) {
        $(() => this.view = new View());
    }
};

export default new App();
