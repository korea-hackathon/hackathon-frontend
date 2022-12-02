#include <bits/stdc++.h>
using namespace std;
int dist[20000005];
queue<pair<int,int>> Q;
int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    int F,S,G,U,D; cin>>F>>S>>G>>U>>D;
    dist[S]=1; Q.push({S,0});
    while(!Q.empty()){
        int cur = Q.front().first; 
        int time = Q.front().second; Q.pop();
        if(cur<0 && cur>F) continue;
        if(cur==G){
            cout << time;
            return 0;
        }
        if(cur+U<=F && cur+U>0){
        if(dist[cur+U]==0){
            dist[cur+U]=1;
            Q.push({cur+U,time+1});
        }
        }
        if(cur-D>0 && cur-D<=F){
        if(dist[cur-D]==0){
            dist[cur-D]=1;
            Q.push({cur-D,time+1});
        }
        }
    }
    cout << "use the stairs" ;

}