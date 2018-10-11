import { Domain } from './domain';
import { SpoofChecker } from './spoof-checker';

export function validate(input: string, verbose: boolean): boolean {
  try {
    if (verbose) {
      console.log('input:', input);
    }
    const domain: Domain = new Domain(input);
    const checker: SpoofChecker = new SpoofChecker();
    if (verbose) {
      console.log('Labels: ', domain.labels);
    }
    return (
      domain.labels.every(label =>
        checker.safeToDisplayAsUnicode(label, domain.isTldAscii),
      ) && !checker.similarToTopDomains(domain.hostname)
    );
  } catch (e) {
    console.log(e.message);
    return false;
  }
}
