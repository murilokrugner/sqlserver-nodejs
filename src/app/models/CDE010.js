/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDE010', {
    CDE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDE_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDE_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDE_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDE_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDE_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDE_CPREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDE_SERREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDE_PARREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDE_LOJREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDE_IFCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDE_ECFFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CDE_ECFCX: {
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
    CDE_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDE_SDOCRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CDE010'
  });
};
