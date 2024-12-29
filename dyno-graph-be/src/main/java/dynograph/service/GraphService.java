package dynograph.service;

import dynograph.external.DynamicGraphAPI;
import dynograph.model.DynamicGraph;
import dynograph.model.HyperEdge;
import dynograph.model.State;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public final class GraphService {
    private final DynamicGraphAPI dynamicGraphAPI;

    public GraphService(DynamicGraphAPI dynamicGraphAPI) {
        this.dynamicGraphAPI = dynamicGraphAPI;
    }

    public DynamicGraph getInitial() {
        State initialState = dynamicGraphAPI.getInitialState();
        Collection<State> successors = dynamicGraphAPI.getSuccessors(initialState);
        Collection<HyperEdge> hyperEdges = dynamicGraphAPI.getHyperEdges(initialState);
        return new DynamicGraph(hyperEdges, successors);
    }

    public DynamicGraph getNextSubgraph(String stateId) {
        State state = dynamicGraphAPI.getState(stateId);
        Collection<State> successors = dynamicGraphAPI.getSuccessors(state);
        Collection<HyperEdge> hyperEdges = dynamicGraphAPI.getHyperEdges(state);
        return new DynamicGraph(hyperEdges, successors);
    }
}
