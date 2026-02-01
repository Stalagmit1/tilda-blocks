// Тестовый скрипт для Tilda
(function(){
    console.log('=== ТЕСТОВЫЙ СКРИПТ ДЛЯ TILDA ===');
    
    // Просто показываем сообщение
    alert('Тестовый скрипт работает!');
    
    // Проверяем окружение
    console.log('URL:', window.location.href);
    console.log('Hostname:', window.location.hostname);
    
    // Проверяем элементы Tilda
    const tildaElements = {
        isEditor: !!document.querySelector('.t-editor'),
        isPageEdit: !!document.querySelector('.t-pageedit'),
        isTilda: window.location.hostname.includes('tilda'),
        tRecords: document.querySelectorAll('.t-records').length,
        tBlocks: document.querySelectorAll('.t-block').length
    };
    
    console.log('Элементы Tilda:', tildaElements);
    
    // Если есть контейнер для блоков, добавляем тестовый блок
    const container = document.querySelector('.t-records');
    if (container) {
        console.log('Найден контейнер для блоков');
        
        // Создаем тестовый блок
        const testBlock = document.createElement('div');
        testBlock.className = 't-block test-block';
        testBlock.innerHTML = '<h2>ТЕСТОВЫЙ БЛОК</h2><p>Этот блок добавлен через скрипт</p>';
        testBlock.style.cssText = 'background: #f0f0f0; padding: 20px; margin: 10px; border: 2px solid #4CAF50; border-radius: 5px;';
        
        container.appendChild(testBlock);
        console.log('Тестовый блок добавлен');
    }
    
    console.log('=== СКРИПТ ВЫПОЛНЕН ===');
})();