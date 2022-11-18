#include <bits/stdc++.h>
using namespace std;
char arr[51][51];
int ans=0;
void Search(int n);
int main(){
    int n; cin >> n;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin >> arr[i][j];
        }
    }
    // 가로 , 세로 바꾸고 서치 
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){ // 가로먼저
            if(j+1<n){ // n * n 의 틀을 벗어나면 안되기 때문
                swap(arr[i][j],arr[i][j+1]);
                Search(n);
                swap(arr[i][j],arr[i][j+1]);
            }
            if(j+1<n){ // n * n 의 틀을 벗어나면 안되기 때문
                swap(arr[i+1][j],arr[i][j]);
                Search(n);
                swap(arr[i+1][j],arr[i][j]);
            }
        }
    }
    cout << ans;
}
void Search(int n){
    int cnt;
    for(int i=0;i<n;i++){
        cnt=1;
        for(int j=0;j<n;j++){
            if(arr[i][j]==arr[i][j+1]){
                cnt++;
                ans=max(ans,cnt);
            }
            else cnt=1;
        }
    }
    for(int i=0;i<n;i++){
        cnt=1;
        for(int j=0;j<n;j++){
            if(arr[j][i]==arr[j+1][i]){
                cnt++;
                ans=max(ans,cnt);
            }
            else cnt=1;
        }
    }
}