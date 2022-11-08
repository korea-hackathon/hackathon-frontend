#include <bits/stdc++.h>
using namespace std;
int main(){
    queue<int> Q;
    int n; cin >> n;
    for(int i=1;i<=n;i++){
        Q.push(i);
    }
    while(Q.size()!=1){
        Q.pop();
        if(Q.size()==1) break;
        Q.push(Q.front());
        Q.pop();
    }
    cout << Q.front();
}