document.addEventListener('DOMContentLoaded', () => {
    const suitcase = document.getElementById('suitcase');
    const itemsPool = document.getElementById('itemsPool');
    const statusMessage = document.getElementById('statusMessage');
    const progressFill = document.querySelector('.progress-fill');
    const itemsCounter = document.querySelector('.items-counter');
    
    let packedItems = 0;
    const totalItems = 6;
    const requiredItems = document.querySelectorAll('[data-required]');

    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });

    suitcase.addEventListener('dragover', handleDragOver);
    suitcase.addEventListener('dragleave', handleDragLeave);
    suitcase.addEventListener('drop', handleDrop);

    function handleDragStart(e) {
        this.classList.add('dragging');
        e.dataTransfer.setData('text/plain', this.id);
        e.dataTransfer.effectAllowed = 'move';
    }

    function handleDragStart(e) {
        this.classList.add('dragging');
        e.dataTransfer.setData('text/plain', this.id);
        e.dataTransfer.effectAllowed = 'move';
    }

    function handleDragEnd() {
        this.classList.remove('dragging');
    }

    function handleDragOver(e) {
        e.preventDefault();
        suitcase.classList.add('hovered');
        e.dataTransfer.dropEffect = 'move';
    }

    function handleDragLeave() {
        suitcase.classList.remove('hovered');
    }

    function handleDrop(e) {
        e.preventDefault();
        suitcase.classList.remove('hovered');
        
        const itemId = e.dataTransfer.getData('text/plain');
        const draggedItem = document.getElementById(itemId);
        
        if (!draggedItem.classList.contains('packed')) {
            packItem(draggedItem);
        }
    }

    function packItem(item) {
        item.classList.add('packed');
        
        const packedItem = item.cloneNode(true);
        packedItem.classList.add('packed-item');
        packedItem.style.position = 'absolute';
        
        packedItem.style.left = `${Math.random() * 70 + 15}%`;
        packedItem.style.top = `${Math.random() * 60 + 20}%`;
        
        suitcase.appendChild(packedItem);
        
        packedItems++;
        updateProgress();

        packedItem.animate([
            { transform: 'scale(0.5)', opacity: 0 },
            { transform: 'scale(1.1)', opacity: 1 },
            { transform: 'scale(1)', opacity: 1 }
        ], { duration: 300 });
        
        checkRequiredItems();
    }

    function updateProgress() {
        const percentage = (packedItems / totalItems) * 100;
        progressFill.style.width = `${percentage}%`;
        itemsCounter.textContent = `${packedItems}/${totalItems}`;

        if (percentage < 50) {
            progressFill.style.background = '#e74c3c';
            statusMessage.textContent = 'Собирайтесь активнее!';
        } else if (percentage < 100) {
            progressFill.style.background = '#f39c12';
            statusMessage.textContent = 'Хороший результат!';
        } else {
            progressFill.style.background = '#2ecc71';
            statusMessage.textContent = 'Вы полностью готовы! 🎉';
            suitcase.style.borderColor = '#2ecc71';
            
            if (window.confetti) {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
    }

    function checkRequiredItems() {
        let allRequiredPacked = true;
        
        requiredItems.forEach(item => {
            if (!item.classList.contains('packed')) {
                allRequiredPacked = false;
            }
        });
        
        if (allRequiredPacked) {
            document.querySelectorAll('[data-required]').forEach(item => {
                item.style.animation = 'none';
                item.style.borderColor = '#2ecc71';
            });
        }
    }

    updateProgress();
});

function confetti(options) {
    console.log('Confetti effect would trigger here');
}