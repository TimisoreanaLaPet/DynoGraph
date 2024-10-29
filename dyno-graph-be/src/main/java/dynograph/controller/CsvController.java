package dynograph.controller;

import dynograph.contract.request.ImportCsvRequest;
import dynograph.contract.response.HttpMessageResponse;
import dynograph.service.CsvService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("csv")
public final class CsvController {
    private final CsvService csvService;

    public CsvController(CsvService csvService) {
        this.csvService = csvService;
    }

    @PostMapping
    public ResponseEntity<HttpMessageResponse> importCsv(
            @RequestBody ImportCsvRequest request) {
        csvService.importCsv(request);
        return new ResponseEntity<>(new HttpMessageResponse("csv imported"), HttpStatus.OK);
    }
}
