class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogHtml() {
        const { name, avatar, age, bio, } = this;
        
        return `
            <div class="dog-card" id="dog-card">
                <img src="/assets/images/badge-like.png" class="card-badge" id="like-badge">
                <img src="/assets/images/badge-nope.png" class="card-badge" id="nope-badge">
                <img src="${avatar}" class="dog-image">
                <div class="dog-description">
                    <span class="dog-name">${name}, <span class="dog-age">${age}</span></span>
                    <p class="dog-bio">${bio}</p>
                </div>
            </div>
        `
    }
}

export default Dog