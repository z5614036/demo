/*
 * @Author: wei.jq 
 * @Date: 2017-10-30 17:09:56 
 * @Last Modified by: wei.jq
 * @Last Modified time: 2017-10-30 17:10:31
 * @Function:public function
 */

export const pubFunc = {
    
    /**
     * //城市机构
     * 
     * @param {any} area 
     * @returns 
     */
    areaOptions: (area) => {
        //城市转换
        let areaOptions = [];
        if (area) {
            let areaArray = area.clone() || [];
            //判断父机构是否是市级机构，是则push到options数组
            for (let i = areaArray.length - 1; i >= 0; i--) {
                if (areaArray[i].parent_area_code.length == 2) {
                    areaOptions.push({ value: areaArray[i].area_code, label: areaArray[i].area_name, children: [] });
                    areaArray.splice(i, 1);
                }
            }
            //若不是父机构，则取父机构的后四位进行匹配放到对应的市级机构的children节点
            for (let m = areaArray.length - 1; m >= 0; m--) {
                for (let n = areaOptions.length - 1; n >= 0; n--) {
                    if (areaArray[m].parent_area_code == areaOptions[n].value) {
                        areaOptions[n].children.push({ value: areaArray[m].area_code, label: areaArray[m].area_name });
                    }
                }
            }
        }
        return areaOptions;
    },
    /**
     *
     * @param {any} arr 
     * @returns 
     * 数组深拷贝
     */
    arrayClone: (arr) => {

        if (!(Object.prototype.toString.call(arr) == '[object Array]')) {
            return arr;
        }
        let copy = [];
        for (let i = 0; i < arr.length; i++)
            if (typeof arr[i] !== 'object') {
                copy.push(arr[i]);
            } else {
                copy.push(pubFunc.arrayClone(arr[i]));
            }
        return copy;
    },
    /**
     * 
     * //对象深拷贝
     * @param {any} obj 
     * @returns 
     */
    objectClone: (obj) => {
        // Handle the 3 simple types, and null or undefined or function
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            let copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        // Handle Array or Object
        if (obj instanceof Array | obj instanceof Object) {
            let copy = (obj instanceof Array) ? [] : {};
            for (let attr in obj) {
                if (obj.hasOwnProperty(attr))
                    copy[attr] = pubFunc.objectClone(obj[attr]);
            }
            return copy;
        }
        throw new Error("Unable to clone obj! Its type isn't supported.");
    }
}