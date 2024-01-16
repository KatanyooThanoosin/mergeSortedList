function merge(collection_1: number[] ,  collection_2: number[]) : number[]{
    let res: number[] = []
    let a: number = 0,b: number = 0
    for (let i = 0; i < collection_1.length+collection_2.length; i++) {
        if(b==collection_2.length || collection_1[a]<collection_2[b]){
            res.push(collection_1[a])
            a+=1
        }
        else{
            res.push(collection_2[b])
            b+=1
        }
    }   
    return res
}

var a:number[] = [1,4,10]
var b:number[] = [2,3,5,6,8]
console.log(merge(a,b))
