class Vertex {
    constructor(value, adjList=new Array()) {
        this.value = value;
        this.adjList = adjList;
    }
}

class Graph {
    constructor() {
        this.vertices = new Array();
    }

    insert(value, adjList) {
        const vertex = new Vertex(value, adjList);
        const newInd = this.vertices.length;
        
        adjList.forEach(index => {
            this.vertices[index].adjList.push(newInd);
        });

        this.vertices.push(vertex);
    }

    bfs(vertexInd) {
        const visited = new Uint8Array(this.vertices.length);
        const path = new Array();
        const queue = new Array();
        queue.push(vertexInd);

        while (queue.length !== 0) {
            const vertInd = queue.shift();

            if (visited[vertInd] === 0) {
                path.push(vertInd);
                visited[vertInd] = 1;

                this.vertices[vertInd].adjList.forEach(index => {
                    queue.push(index);
                });
            }
        }

        return path;
    }

    dfs(vertexInd) {
        const visited = new Uint8Array(this.vertices.length);
        const path = new Array();
        const vertices = this.vertices;

        function recursive(vertInd) {
            if (visited[vertInd] === 1) {
                return;
            }

            path.push(vertInd);
            visited[vertInd] = 1;

            vertices[vertInd].adjList.forEach(index => {
                recursive(index);
            });
        }

        recursive(vertexInd);

        return path;
    }
}

const graph = new Graph();
graph.insert(0, []);
graph.insert(1, [0]);
graph.insert(2, [1]);
graph.insert(3, [2]);
graph.insert(4, [0, 2, 3]);

console.log(graph.bfs(0));
console.log(graph.dfs(0));
