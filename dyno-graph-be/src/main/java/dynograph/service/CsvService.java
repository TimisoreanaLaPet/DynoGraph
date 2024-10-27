package dynograph.service;

import dynograph.contract.request.ImportCsvRequest;
import org.springframework.stereotype.Service;

@Service
public final class CsvService {
    public void importCsv(ImportCsvRequest request) {
        System.out.println(request.csv() + " csv imported");
    }
}
