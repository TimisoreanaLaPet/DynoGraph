package dynograph.service;

import dynograph.model.Graph;
import org.springframework.stereotype.Service;

@Service
public final class GraphService {
    public Graph get() {
        return new Graph("graph");
    }
}
