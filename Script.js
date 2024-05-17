// const nums1 = [11, 12,15, 0, 0, 0];
// const m = 3;
// const nums2 = [-1, 7, 8];
// const n = 3;

const merge = (nums1, m, nums2, n) =>{
    let i1 = m -1;
    let j2 = n - 1;
    let end = m + n -1;
  
    for (end; i1 >= 0 && j2 >= 0; end--){
        if (nums1[i1] <= nums2[j2]){
            // console.log(j2)
            nums1[end] = nums2[j2]
            j2--
        }
        else{
            nums1[end] = nums1[i1]
            // console.log(i1)
            i1--
        }
    }
    for (end; j2 >= 0; end--) {
       // console.log(j2)
        nums1[end] = nums2[j2];
        j2--;
      }
}
merge(nums1, m, nums2, n);

//console.log(nums1)