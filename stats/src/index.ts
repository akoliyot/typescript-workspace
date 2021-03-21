import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CSVFileReader } from "./CSVFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

const reader = new CSVFileReader("football.csv");

const matchReader = new MatchReader(reader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);
