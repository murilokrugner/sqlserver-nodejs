/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NTA010', {
    NTA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NTA_CAJURI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NTA_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NTA_CTIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NTA_REAGEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NTA_DTORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NTA_DTFLWP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NTA_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NTA_DTLIMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NTA_DURACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NTA_CPREPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NTA_CCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NTA_LCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NTA_CADVCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NTA_ACEITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NTA_JUSTIF: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NTA_CRESUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NTA_CATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NTA_CFASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NTA_DESC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NTA_DTINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NTA_USUINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NTA_DTALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NTA_USUALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NTA_USUCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NTA_DTCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NTA_CFLWPP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NTA_FLAG01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NTA_CANDAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NTA_DTLIAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NTA_DTPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NTA_HRPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NTA_CODWF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    NTA_CINSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'NTA010'
  });
};
