/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBA010', {
    TBA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TBA_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TBA_DTTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TBA_HRTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TBA_QTDSAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TBA_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TBA_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TBA_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TBA_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TBA_FATOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TBA_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TBA_CODDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TBA_LOTECT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TBA_NUMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TBA_DTVALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TBA_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    TBA_NUMMTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TBA_TIPDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TBA_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'TBA010'
  });
};
