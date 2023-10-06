Page({
    data:{
        inputValue:'',
        commentList: [
            {id:33925, content:'我在摸豆豆屁股'},
            {id:33922, content:'等着收律师函吧'},
            {id:33927, content:'胖噜噜胡哈哈'},
        ]
    },
    delCommentItem(e){
        let delIndex = e.currentTarget.dataset.index
        let newArr =  this.data.commentList
        newArr.splice(delIndex,1)
        this.setData({commentList:newArr})
    },
    commentInput(e){
        return
    },
    commiteComment(){
        let newArr = this.data.commentList
        newArr.push({id: new Date().getTime(), content:this.data.inputValue})
        this.setData({commentList:newArr})
        this.setData({inputValue:''})
     }
})