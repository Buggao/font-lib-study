import React, {Component} from 'react'
import axios from 'axios'

export default class AxiosComponent extends Component {
    state = {
        imgObj: {
            imgSrc: '',
            alt: 'no',
            id:'001',
        }
    }
    getData = () => {
        const {imgObj} = this.state.imgObj
        let newImg = {}
        axios.get('https://api.thecatapi.com/v1/images/search?limit=1').then(
            response => {
                console.log('get success ', response.data);
                newImg = response.data[0]
                this.setState(imgObj, newImg)
            }
            
        )
    }
    render() {
        const {imgObj} = this.state
        return (
            <div>
                <span>{imgObj.id}</span>
                <div className='img-box'>
                    <img src={imgObj.imgSrc} alt={imgObj.alt}></img>
                </div>
                <button onClick={this.getData}>点我获取数据</button>
            </div>
        )
    }
}