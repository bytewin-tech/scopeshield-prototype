const samples = {
  web: {
    title: 'Website redesign proposal',
    text: `Project includes homepage redesign, four supporting pages, and launch support.\n\nTimeline is approximately 4-6 weeks depending on feedback speed. Reasonable revisions are included throughout the project. Additional requests can be discussed if needed.\n\nClient will provide content and approvals in a timely manner. Final deliverables will include design files and development handoff. Payment is 50% upfront and the remainder at completion.`,
    score: 72,
    label: 'High risk of scope drift',
    flags: [
      {
        title: '“Reasonable revisions are included”',
        severity: 'danger',
        text: 'Unlimited or subjective revision language invites repeated rounds without a billing trigger.'
      },
      {
        title: '“Approximately 4-6 weeks”',
        severity: 'warn',
        text: 'Soft timing without dependency language makes delivery responsibility unclear when feedback is delayed.'
      },
      {
        title: '“Additional requests can be discussed”',
        severity: 'warn',
        text: 'Discussion is not a process. Scope changes need documentation, pricing, and written approval.'
      },
      {
        title: '“Remainder at completion”',
        severity: 'danger',
        text: 'End-loaded payment increases cash flow risk and weakens leverage late in the project.'
      }
    ],
    missing: [
      {
        title: 'Change request workflow',
        severity: 'warn',
        text: 'No explicit path for net-new requests, expanded deliverables, or extra rounds.'
      },
      {
        title: 'Late payment consequence',
        severity: 'warn',
        text: 'Missing due dates, late fees, or pause rights if invoices go unpaid.'
      },
      {
        title: 'Approval turnaround requirement',
        severity: 'neutral',
        text: 'Proposal mentions timely approvals but does not define timeline or schedule impact.'
      }
    ],
    rewrites: [
      {
        title: 'Define revision boundaries',
        priority: 'High priority',
        text: 'Includes two structured revision rounds per milestone. Additional revisions or direction changes after approval are billed at the standard hourly rate.'
      },
      {
        title: 'Create a scope-change checkpoint',
        priority: 'High priority',
        text: 'Requests outside the approved deliverables will be documented, quoted, and scheduled after written approval from the client.'
      },
      {
        title: 'Strengthen payment terms',
        priority: 'High priority',
        text: 'Payment schedule: 50% to reserve the project, 25% at design approval, and 25% before handoff. Invoices are due within 7 calendar days.'
      },
      {
        title: 'Tie timeline to client response times',
        priority: 'Recommended',
        text: 'Timeline assumes consolidated feedback within 2 business days of each review checkpoint. Delays may shift the final delivery date.'
      }
    ]
  },
  retainer: {
    title: 'Fractional marketing retainer',
    text: `This monthly engagement covers strategy, campaign planning, and hands-on optimization support. We will collaborate closely and adjust priorities as business needs evolve. Urgent requests will be accommodated when possible.\n\nBilling is monthly. Unused hours may roll forward at discretion. Deliverables and reporting cadence will be refined after kickoff.`,
    score: 81,
    label: 'High risk of retainer overrun',
    flags: [
      {
        title: '“Adjust priorities as business needs evolve”',
        severity: 'danger',
        text: 'This creates an open-ended commitment without capacity limits or tradeoff rules.'
      },
      {
        title: '“Urgent requests will be accommodated when possible”',
        severity: 'danger',
        text: 'Promises responsiveness without service levels or billing treatment for rush work.'
      },
      {
        title: '“Unused hours may roll forward at discretion”',
        severity: 'warn',
        text: 'Discretionary rollover invites negotiation unless rollover rules are explicit.'
      }
    ],
    missing: [
      {
        title: 'Monthly hour cap',
        severity: 'danger',
        text: 'No stated cap, response window, or prioritization model for requests.'
      },
      {
        title: 'Out-of-scope billing terms',
        severity: 'warn',
        text: 'No rate or approval process for work beyond the retainer allocation.'
      },
      {
        title: 'Termination / pause terms',
        severity: 'neutral',
        text: 'Proposal lacks notice period and handling for paused work.'
      }
    ],
    rewrites: [
      {
        title: 'Anchor capacity',
        priority: 'High priority',
        text: 'This retainer includes up to 20 hours per month covering strategy, campaign planning, and optimization. Requests are prioritized against that allocation.'
      },
      {
        title: 'Define rush work',
        priority: 'High priority',
        text: 'Rush requests with turnaround under 2 business days require capacity confirmation and may be billed separately.'
      },
      {
        title: 'Clarify rollover',
        priority: 'Recommended',
        text: 'Unused hours do not roll over unless explicitly stated in writing for that billing month.'
      }
    ]
  },
  branding: {
    title: 'Brand identity package',
    text: `The package includes brand strategy, visual direction, logo exploration, and a concise style guide. We will explore multiple directions and land on the strongest option together.\n\nThe process is collaborative and designed to stay flexible. Final files will be shared after final payment. Additional brand assets can be added if the team decides they are useful during the engagement.`,
    score: 64,
    label: 'Moderate risk with expansion pressure',
    flags: [
      {
        title: '“Multiple directions”',
        severity: 'warn',
        text: 'Unclear how many concepts are included and when concept exploration ends.'
      },
      {
        title: '“Designed to stay flexible”',
        severity: 'warn',
        text: 'Signals openness without guardrails for decision-making or milestone approvals.'
      },
      {
        title: '“Additional brand assets can be added”',
        severity: 'danger',
        text: 'Encourages expansion but does not define quote or approval mechanics.'
      }
    ],
    missing: [
      {
        title: 'Concept count + included file list',
        severity: 'warn',
        text: 'Proposal should define exact outputs and number of presented directions.'
      },
      {
        title: 'Revision rounds by phase',
        severity: 'warn',
        text: 'No limit on strategic or visual revisions after direction selection.'
      }
    ],
    rewrites: [
      {
        title: 'Specify concept count',
        priority: 'High priority',
        text: 'The project includes two initial visual directions, one selected route, and two revision rounds after route selection.'
      },
      {
        title: 'Control asset expansion',
        priority: 'High priority',
        text: 'Additional brand assets outside the listed deliverables can be scoped and quoted as a separate add-on upon request.'
      },
      {
        title: 'Clarify handoff package',
        priority: 'Recommended',
        text: 'Final handoff includes approved logo files, color palette, type guidance, and a concise one-page style guide.'
      }
    ]
  }
};

const proposalInput = document.getElementById('proposalInput');
const analyzeButton = document.getElementById('analyzeButton');
const loadSampleButton = document.getElementById('loadSampleButton');
const flaggedPhrases = document.getElementById('flaggedPhrases');
const missingClauses = document.getElementById('missingClauses');
const rewrites = document.getElementById('rewrites');
const riskScore = document.getElementById('riskScore');
const riskLabel = document.getElementById('riskLabel');
const flagCount = document.getElementById('flagCount');
const missingCount = document.getElementById('missingCount');
const rewriteCount = document.getElementById('rewriteCount');
const analysisState = document.getElementById('analysisState');
const toast = document.getElementById('toast');
const sampleButtons = Array.from(document.querySelectorAll('.sample-button'));
const copySummaryButton = document.getElementById('copySummaryButton');
const exportButton = document.getElementById('exportButton');

let activeSample = 'web';

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('visible'), 2400);
}

function createListItem(item, kind) {
  const wrapper = document.createElement('article');
  wrapper.className = kind === 'rewrite' ? 'rewrite-item' : 'stack-item';

  const head = document.createElement('div');
  head.className = kind === 'rewrite' ? 'rewrite-head' : 'item-title-row';

  const title = document.createElement('strong');
  title.textContent = item.title;

  const pill = document.createElement('span');
  pill.className = `pill ${item.severity || 'neutral'}`;
  pill.textContent = item.priority || item.severity || 'note';

  head.append(title, pill);

  const text = document.createElement(kind === 'rewrite' ? 'p' : 'p');
  text.className = kind === 'rewrite' ? '' : 'item-text';
  text.textContent = item.text;

  wrapper.append(head, text);
  return wrapper;
}

function detectCustomRisk(text) {
  const normalized = text.toLowerCase();
  let extraFlags = [];
  let extraMissing = [];
  let extraRewrites = [];
  let delta = 0;

  if (normalized.includes('reasonable revisions')) {
    delta += 7;
  }
  if (normalized.includes('if needed') || normalized.includes('as needed')) {
    extraFlags.push({
      title: 'Loose optionality language',
      severity: 'warn',
      text: 'Phrases like “if needed” or “as needed” can quietly widen expected support.'
    });
    delta += 5;
  }
  if (!normalized.includes('invoice') && !normalized.includes('payment due')) {
    extraMissing.push({
      title: 'Invoice due date',
      severity: 'warn',
      text: 'Add a specific due date and whether work pauses on overdue invoices.'
    });
    delta += 6;
  }
  if (!normalized.includes('revision')) {
    extraMissing.push({
      title: 'Revision count',
      severity: 'warn',
      text: 'Specify how many revision rounds are included and what happens after that.'
    });
    delta += 4;
  }
  if (!normalized.includes('approval')) {
    extraMissing.push({
      title: 'Written approval checkpoint',
      severity: 'neutral',
      text: 'Add written approval gates before moving between milestones or extra work.'
    });
    delta += 3;
  }
  if (extraFlags.length || extraMissing.length) {
    extraRewrites.push({
      title: 'Add explicit scope and billing controls',
      priority: 'Recommended',
      text: 'Define included deliverables, approval checkpoints, due dates, revision limits, and the exact process for change requests.'
    });
  }

  return { extraFlags, extraMissing, extraRewrites, delta };
}

function renderAnalysis(sampleKey) {
  const base = samples[sampleKey];
  const custom = detectCustomRisk(proposalInput.value);
  const score = Math.min(95, base.score + custom.delta);
  const flags = [...base.flags, ...custom.extraFlags];
  const missing = [...base.missing, ...custom.extraMissing];
  const suggested = [...base.rewrites, ...custom.extraRewrites];

  riskScore.textContent = score;
  riskLabel.textContent = score >= 75 ? 'High risk — tighten before sending' : score >= 60 ? 'Moderate risk — add stronger protections' : 'Low risk — mostly clear';
  flagCount.textContent = flags.length;
  missingCount.textContent = missing.length;
  rewriteCount.textContent = suggested.length;

  flaggedPhrases.replaceChildren(...flags.map(item => createListItem(item, 'flag')));
  missingClauses.replaceChildren(...missing.map(item => createListItem(item, 'missing')));
  rewrites.replaceChildren(...suggested.map(item => createListItem(item, 'rewrite')));

  analysisState.textContent = 'Analyzed';
  analysisState.style.color = 'var(--success)';
}

function setActiveSample(sampleKey) {
  activeSample = sampleKey;
  sampleButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.sample === sampleKey);
  });
  proposalInput.value = samples[sampleKey].text;
  renderAnalysis(sampleKey);
}

sampleButtons.forEach(button => {
  button.addEventListener('click', () => setActiveSample(button.dataset.sample));
});

loadSampleButton.addEventListener('click', () => {
  setActiveSample(activeSample);
  showToast(`Loaded ${samples[activeSample].title}`);
});

analyzeButton.addEventListener('click', () => {
  analysisState.textContent = 'Scanning…';
  analysisState.style.color = 'var(--warning)';
  window.setTimeout(() => {
    renderAnalysis(activeSample);
    showToast('Analysis complete. Risks and rewrites updated.');
  }, 360);
});

copySummaryButton.addEventListener('click', async () => {
  const summary = `ScopeShield summary\nRisk score: ${riskScore.textContent}\nFlagged phrases: ${flagCount.textContent}\nMissing clauses: ${missingCount.textContent}\nSuggested rewrites: ${rewriteCount.textContent}`;
  try {
    await navigator.clipboard.writeText(summary);
    showToast('Summary copied to clipboard.');
  } catch (error) {
    showToast('Clipboard unavailable in this browser context.');
  }
});

exportButton.addEventListener('click', () => {
  const blob = new Blob([
    `ScopeShield export\n\nSample: ${samples[activeSample].title}\nRisk score: ${riskScore.textContent}\nStatus: ${riskLabel.textContent}\n\nProposal text:\n${proposalInput.value}`
  ], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'scopeshield-clean-draft.txt';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('Exported clean draft summary.');
});

document.querySelectorAll('[data-scroll]').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  });
});

setActiveSample(activeSample);
