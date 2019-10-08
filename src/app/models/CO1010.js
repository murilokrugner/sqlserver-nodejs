/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CO1010', {
    CO1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CO1_CODEDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CO1_NUMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CO1_ETAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CO1_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CO1_DTABER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_MODALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CO1_PRAZO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO1_TPPRAZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_DTPUBL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_TPAPR1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_APROV1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CO1_TPAPR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_APROV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CO1_COMISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_RD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CO1_PREQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_PASSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CO1_CAUCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_RUBRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_DTCOMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_DTRUBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_DTAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_VLCAUC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO1_VLCCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO1_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CO1_CLAVLR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CO1_ITEMCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CO1_DIRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CO1_DTEDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_OBS1: {
      type: "IMAGE",
      allowNull: true
    },
    CO1_DTADJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_VALREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_DVLREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_DTRATI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_DTEXTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_DTATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_ENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_DTENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_TEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_DTTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_COM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_DTCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_REMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CO1_OPANTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO1_HRABER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CO1_HREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CO1_REGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CO1_DV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CO1_ESPECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_EXEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_REGEXE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_OBJETO: {
      type: "IMAGE",
      allowNull: true
    },
    CO1_TECPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_SRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_QTDSRP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO1_DTSRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_BKPASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CO1_BKETAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CO1_SRPAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_DTSRPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_AVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_COPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_REFORM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_INVFAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CO1_EDTANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CO1_PROCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CO1_IMEDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CO1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_CODORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CO1_CNPUBL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CO1_LEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_ARTIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CO1_PARAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CO1_LOCALP: {
      type: "IMAGE",
      allowNull: true
    },
    CO1_DATARP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_HORARP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CO1_HORAAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CO1_HRADJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CO1_OBSADJ: {
      type: "IMAGE",
      allowNull: true
    },
    CO1_DTHOMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_HRHOMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CO1_OBSHOM: {
      type: "IMAGE",
      allowNull: true
    },
    CO1_UMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_INTEGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_GERDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CO1_MODISP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_NUMINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CO1_FORMLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_MEEPP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_FORMRL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO1_DTSUSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_DTRSUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO1_JUSUSP: {
      type: "IMAGE",
      allowNull: true
    },
    CO1_FUSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CO1010'
  });
};
