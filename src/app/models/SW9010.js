/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SW9010', {
    W9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W9_INVOICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W9_DT_EMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W9_HAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    W9_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W9_FORLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W9_NOM_FOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    W9_MOE_FOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W9_FOB_TOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_INCOTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W9_TX_FOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    W9_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W9_COND_PA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    W9_DIAS_PA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_RAT_POR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W9_FREINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W9_SEGINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W9_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_FRETEIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_INLAND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_PACKING: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_OUTDESP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_TUDO_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W9_FORNECC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W9_LOJAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W9_COMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W9_PERCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_VALCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W9_TIPOCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    }
  }, {
    tableName: 'SW9010'
  });
};
