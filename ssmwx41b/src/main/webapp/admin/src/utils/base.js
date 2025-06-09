const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmwx41b/",
            name: "ssmwx41b",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmwx41b/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "论文管理系统"
        } 
    }
}
export default base
