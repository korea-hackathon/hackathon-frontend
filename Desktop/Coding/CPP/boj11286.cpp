#include <bits/stdc++.h>
using namespace std;
int main(){
    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq;
    int t; cin>>t;
    while(t--){
        int n; cin >> n;
        if(n!=0){
            pq.push({abs(n),n});
        }
        else if(!pq.empty()){
            printf("%d\n",pq.top().second);
            pq.pop();
        }
        else{
            printf("0\n");
        }
    }
}