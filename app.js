// https://www.omnicalculator.com/finance/enterprise-value#enterprise-value-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const enterprisevalueRadio = document.getElementById('enterprisevalueRadio');
const marketcapitalizationRadio = document.getElementById('marketcapitalizationRadio');
const minorityinterestRadio = document.getElementById('minorityinterestRadio');
const preferredsharesRadio = document.getElementById('preferredsharesRadio');
const valueofdebtRadio = document.getElementById('valueofdebtRadio');
const cashandcashequivalentsRadio = document.getElementById('cashandcashequivalentsRadio');

let enterprisevalue;
let marketcapitalization = v1;
let minorityinterest = v2;
let preferredshares = v3;
let valueofdebt = v4;
let cashandcashequivalents = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

enterprisevalueRadio.addEventListener('click', function() {
  variable1.textContent = 'Market capitalization';
  variable2.textContent = 'Minority interest';
  variable3.textContent = 'Preferred shares';
  variable4.textContent = 'Value of debt';
  variable5.textContent = 'Cash and cash equivalents';
  marketcapitalization = v1;
  minorityinterest = v2;
  preferredshares = v3;
  valueofdebt = v4;
  cashandcashequivalents = v5;
  result.textContent = '';
});

marketcapitalizationRadio.addEventListener('click', function() {
  variable1.textContent = 'Enterprise value';
  variable2.textContent = 'Minority interest';
  variable3.textContent = 'Preferred shares';
  variable4.textContent = 'Value of debt';
  variable5.textContent = 'Cash and cash equivalents';
  enterprisevalue = v1;
  minorityinterest = v2;
  preferredshares = v3;
  valueofdebt = v4;
  cashandcashequivalents = v5;
  result.textContent = '';
});

minorityinterestRadio.addEventListener('click', function() {
  variable1.textContent = 'Enterprise value';
  variable2.textContent = 'Market capitalization';
  variable3.textContent = 'Preferred shares';
  variable4.textContent = 'Value of debt';
  variable5.textContent = 'Cash and cash equivalents';
  enterprisevalue = v1;
  marketcapitalization = v2;
  preferredshares = v3;
  valueofdebt = v4;
  cashandcashequivalents = v5;
  result.textContent = '';
});

preferredsharesRadio.addEventListener('click', function() {
  variable1.textContent = 'Enterprise value';
  variable2.textContent = 'Market capitalization';
  variable3.textContent = 'Minority interest';
  variable4.textContent = 'Value of debt';
  variable5.textContent = 'Cash and cash equivalents';
  enterprisevalue = v1;
  marketcapitalization = v2;
  minorityinterest = v3;
  valueofdebt = v4;
  cashandcashequivalents = v5;
  result.textContent = '';
});

valueofdebtRadio.addEventListener('click', function() {
  variable1.textContent = 'Enterprise value';
  variable2.textContent = 'Market capitalization';
  variable3.textContent = 'Minority interest';
  variable4.textContent = 'Preferred shares';
  variable5.textContent = 'Cash and cash equivalents';
  enterprisevalue = v1;
  marketcapitalization = v2;
  minorityinterest = v3;
  preferredshares = v4;
  cashandcashequivalents = v5;
  result.textContent = '';
});

cashandcashequivalentsRadio.addEventListener('click', function() {
  variable1.textContent = 'Enterprise value';
  variable2.textContent = 'Market capitalization';
  variable3.textContent = 'Minority interest';
  variable4.textContent = 'Preferred shares';
  variable5.textContent = 'Value of debt';
  enterprisevalue = v1;
  marketcapitalization = v2;
  minorityinterest = v3;
  preferredshares = v4;
  valueofdebt = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(enterprisevalueRadio.checked)
    result.textContent = `Enterprise value = ${computeenterprisevalue().toFixed(2)}`;

  else if(marketcapitalizationRadio.checked)
    result.textContent = `Market capitalization = ${computemarketcapitalization().toFixed(2)}`;

  else if(minorityinterestRadio.checked)
    result.textContent = `Minority interest = ${computeminorityinterest().toFixed(2)}`;

  else if(preferredsharesRadio.checked)
    result.textContent = `Preferred shares = ${computepreferredshares().toFixed(2)}`;

  else if(valueofdebtRadio.checked)
    result.textContent = `Value of debt = ${computevalueofdebt().toFixed(2)}`;

  else if(cashandcashequivalentsRadio.checked)
    result.textContent = `Cash and cash equivalents = ${computecashandcashequivalents().toFixed(2)}`;
})

// calculation

// Enterprise value = market capitalization + debt + minority interest + preferred shares - cash and cash equivalents

function computeenterprisevalue() {
  return Number(marketcapitalization.value) + Number(valueofdebt.value) + Number(minorityinterest.value) + Number(preferredshares.value) - Number(cashandcashequivalents.value);
}

function computemarketcapitalization() {
  return Number(enterprisevalue.value) - Number(valueofdebt.value) - Number(minorityinterest.value) - Number(preferredshares.value) + Number(cashandcashequivalents.value);
}

function computeminorityinterest() {
  return Number(enterprisevalue.value) - Number(marketcapitalization.value) - Number(valueofdebt.value) - Number(preferredshares.value) + Number(cashandcashequivalents.value);
}

function computepreferredshares() {
  return Number(enterprisevalue.value) - Number(marketcapitalization.value) - Number(valueofdebt.value) - Number(minorityinterest.value) + Number(cashandcashequivalents.value);
}

function computevalueofdebt() {
  return Number(enterprisevalue.value) - Number(marketcapitalization.value) - Number(minorityinterest.value) - Number(preferredshares.value) + Number(cashandcashequivalents.value);
}

function computecashandcashequivalents() {
  return Number(marketcapitalization.value) + Number(minorityinterest.value) + Number(preferredshares.value) + Number(valueofdebt.value) - Number(enterprisevalue.value);
}