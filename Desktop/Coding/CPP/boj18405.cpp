#include <bits/stdc++.h>
using namespace std;
int graph[201][201];
int visitied[201][201];
int visited2[201][201];
int dx[4]={0,0,1,-1};
int dy[4]={1,-1,0,0};
int n,m;
int k;
priority_queue<pair<int,pair<int, int>>,vector<pair<int, pair<int, int>>>,greater<pair<int, pair<int, int>>>> pq;
void bfs(int x,int y,int n){
    queue<pair<int,int>> Q; 
    Q.push({x,y});
    visitied[x][y]=1;
    if(!Q.empty()){
        x = Q.front().first;
        y = Q.front().second;
        Q.pop();
        for(int dir=0;dir<4;dir++){ 
            int nx = x + dx[dir];
            int ny = y + dy[dir];
            // cout << nx << " " << ny << " " << n <<"\n";
            // cout << visitied[nx][ny] << " " << graph[nx][ny] <<" "<< graph[x][y]<<"\n\n";
            if(!visitied[nx][ny] && graph[nx][ny]==0 && nx>=0 && nx<n && ny>=0 && ny<n){
                Q.push({nx,ny});
                visitied[nx][ny]=1;
                graph[nx][ny]=graph[x][y];
            }
        }
        Q=queue<pair<int,int>>();
    }
}
int main(){
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n,m; cin >> n >> m;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin >> graph[i][j];
            if(graph[i][j]){
                pq.push({graph[i][j],{i,j}});
            }
        }
    }
    int s,x,y; cin >> s >> x >> y ;
    while(s--){
    while(!pq.empty()){
        bfs(pq.top().second.first,pq.top().second.second,n);
        visited2[pq.top().second.first][pq.top().second.second]=1;
        pq.pop();
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(graph[i][j] && !visited2[i][j]){
                pq.push({graph[i][j],{i,j}});
            }
        }
    }
}
    cout << graph[x-1][y-1];
}