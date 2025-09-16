function Loader() {
  return (
    //宽度 = 父元素(html（viewport）)宽度 - left - right = 100%，高度 = 父元素高度 - top - bottom = 100%。
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
