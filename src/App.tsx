import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://s2-autoesporte.glbimg.com/sIRMtmJSvjpZMVG9OW7IwNOBb0I=/0x0:1920x1041/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/6/X/VtkMgIRMA3B5Dk75xvxA/1989-batmobile-original-prop-is-for-sale-costs-more-than-a-few-replicas-203169-1.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
