package dynograph.external;

import dynograph.model.HyperEdge;
import dynograph.model.State;

import java.util.Collection;

public interface DynamicGraphAPI {
    Collection<HyperEdge> getHyperEdges(State state);
    String getStateLabel(State state);
    String getEdgeLabel(HyperEdge edge);
    Collection<State> getSuccessors(State state);
    State getInitialState();
    State getState(String stateId);
    String getSuccessorLabel(State state, HyperEdge edge, State successor);
}
