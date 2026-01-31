
class TechStackVisualizer {
    constructor(data, containerId) {
        this.data = data;
        this.container = document.getElementById(containerId);
        this.grid = document.getElementById('stack-grid');
        this.details = document.getElementById('stack-details');
        this.filters = document.querySelectorAll('.stack-filters button0');

        this.init();
    }

    init() {
        this.render('all');
        this.attachEvents();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new TechStackVisualizer(techStackData, 'tech-stack');
});