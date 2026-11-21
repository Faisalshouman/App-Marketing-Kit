import { ActionLink, FAQ, JourneyPlayer, MarketingHero, MarketingShell, type JourneyChapterData } from '@app-marketing/ui';
import '@app-marketing/ui/style.css';

// Fictional task-management example. Replace every claim with verified app behavior.
const chapters: readonly JourneyChapterData[] = [{
  id: 'first-task',
  title: 'Create your first task',
  summary: 'This fictional example shows how to describe one valuable action.',
  steps: ['Open your workspace.', 'Choose New task.', 'Enter a title and save.'],
  result: 'The task appears in your workspace.',
  recovery: 'If saving fails, retain the draft and retry after checking the connection.',
  cost: 'Example only. Configure the actual app offer before publishing.',
  availability: 'Authored demonstration of a fictional app.',
}];

export function App() {
  return <MarketingShell brand={{ name: 'Example App' }}>
    <MarketingHero title="Keep your next action in view."
      description="Replace this fictional positioning with your audience, job and supported benefit."
      action={<ActionLink destination="#walkthrough" allowedDestinations={['#walkthrough']}>Explore the example</ActionLink>} />
    <div id="walkthrough"><JourneyPlayer chapters={chapters} /></div>
    <FAQ title="Questions" items={[{
      question: 'Is this a real product?',
      answer: <p>This is a fictional sample for adapting the kit.</p>,
    }]} />
  </MarketingShell>;
}

