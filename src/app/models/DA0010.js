/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DA0010', {
    DA0_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DA0_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DA0_DATDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA0_HORADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DA0_DATATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA0_HORATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DA0_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DA0_TPHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA0_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA0_FILPUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA0_CODPUB: {
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
    DA0_ECFLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA0_ECDTEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA0_ECSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    }
  }, {
    tableName: 'DA0010'
  });
};
