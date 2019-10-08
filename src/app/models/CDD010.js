/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDD010', {
    CDD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDD_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDD_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDD_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDD_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDD_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDD_DOCREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDD_SERREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDD_PARREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDD_LOJREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDD_IFCOMP: {
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
    CDD_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDD_SDOCRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDD_CHVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    }
  }, {
    tableName: 'CDD010'
  });
};
