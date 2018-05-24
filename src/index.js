import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/header.jsx').default);
// app.model(require('./models/content.jsx').default);
// app.model(require('./models/footer.jsx').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
