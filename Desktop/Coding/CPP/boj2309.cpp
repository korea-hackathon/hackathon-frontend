#include <bits/stdc++.h>
using namespace std;
int main(){
    int arr[9];
    int total=0;
    for(int i=0;i<9;i++){
        cin >> arr[i];
        total+=arr[i];
    }
    for(int i=0;i<9;i++){
        for(int j=i+1;j<9;j++){
            if((total-arr[i]-arr[j])==100){
                arr[i]=101;
                arr[j]=101;
                i=9;
                j=9;
            }
        }
    }
    sort(arr,arr+9);
    for(int i=0;i<7;i++){
        cout << arr[i] << "\n";
    }
    
}