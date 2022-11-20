#include <bits/stdc++.h>
using namespace std;
int compare(const void* a, const void* b)
{
	const int* x = (int*) a;
	const int* y = (int*) b;
 
	if (*x > *y)
		return 1;
	else if (*x < *y)
		return -1;
 
	return 0;
}
int Search(long long target,long long arr[],int size){
        int low=0,high = size-1;
        int mid;
        while(low<=high){
            mid = (low+high)/2;
            if(target==arr[mid]) return 1;
            else if(target<arr[mid]){   
                high = mid-1;
            }
            else if(target>arr[mid]){
                low = mid+1;
            }
        }
        return 0;
}
int main(){
    long long t; cin >> t;
    ios_base::sync_with_stdio(0);cin.tie(0);
    long long arr[1000000]={0,};
    for(int i=0;i<t;i++){
        cin >> arr[i];
    }
    qsort(arr,t,sizeof(long long),compare);
    long long n; cin >> n;
    while (n--)
    {
        long long a; cin >> a;
        cout << Search(a,arr,t) << "\n";
    }
    
}