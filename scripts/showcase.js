    let currentDesign = '1';

    function switchDesign(num) {
      currentDesign = num;
      const frame = document.getElementById('previewFrame');
      const fullBtn = document.getElementById('open-full-btn');
      const designPaths = {
        '1': 'concepts/agro-heritage/',
        '2': 'concepts/warm-roast/',
        '3': 'concepts/editorial/',
        '4': 'concepts/commercial/'
      };
      const targetUrl = designPaths[num];
      if (!targetUrl) return;

      frame.src = targetUrl;
      fullBtn.href = targetUrl;

      // Update tabs
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      const activeTab = document.getElementById('tab-' + num);
      if (activeTab) activeTab.classList.add('active');
    }

    function setViewport(size) {
      const wrapper = document.getElementById('frameWrapper');
      wrapper.className = 'frame-wrapper viewport-' + size;

      document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
      const activeBtn = document.getElementById('size-' + size);
      if (activeBtn) activeBtn.classList.add('active');
    }
