//Rain Water Trapping Problem

// There is a brute,better and optimal approach to this question.

// Brute Force Logic: For every element find the min(leftmax,rightmax) and substract the height of that block to get answer.TC(O(N^2))
// Better Solution Logic: Store in prefix and suffix arrays and then find the water to be stored at every block. TC(O(N))
// Optimal Solution:Calculate leftmax and rightmax by using two pointer technique,and the min of two at every point will be the deciding factor.

const waterTrap = function(height){
    var left=0,  
    right=height.length - 1,     
    leftmax=-1, 
    rightmax=-1,
    water_stored=0;

    while(left<=right){ // We check till left and right donot exceed each other
        if(height[left]<=height[right]){ // left height < right height so left height will decide the water stored
            if(height[left]>leftmax){ // if left height is greater than leftmax no water will be stored
                leftmax=height[left];
            }
            else{
                water_stored+=leftmax-height[left]; // water will be stored equal to leftmax-current height
            }
            left++; // we increment left since left is smaller than right 

        }
        else{
            if(height[right]>rightmax){ // if rightmax is smaller then current height water will flow away
                rightmax=height[right]; // No water will be stored
            }
            else{
                water_stored+=rightmax-height[right]; // water will be stored equal to rightmax-current height
            }
            right--; // we decrement right since left is bigger than right 


        }
    }
    return water_stored;  
}
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(waterTrap(height));

//Time Complexity is O(N)
//Space Complexity is O(1)