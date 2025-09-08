import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WorldWide 是一款使用了React + Hooks + Context API +
            Reducer、CSS模块化、 React Router的SPA项目
          </p>
          <p>
            <li>
              支持 <b>动态添加城市</b>（通过地图点击或表单）
            </li>
            <li>
              使用 <b>日期选择器</b>(react-datepicker)和笔记字段管理城市信息
            </li>
            <li>可展示每个城市的国家旗帜(在Win上有和谐)</li>
            <li>
              有 <b>加载状态</b> 和 <b>错误处理</b>(Spinner + Message)
            </li>
            <li>
              使用 <b>useReducer</b> + <b>Context API</b>
              管理城市列表、当前城市和加载状态,便于未来扩展.
            </li>
            <li>使用 useCallback 修复getCity函数的无限请求问题.</li>
            <li>使用 lazy 将包分成多个块加载</li>
          </p>
        </div>
      </section>
    </main>
  );
}
