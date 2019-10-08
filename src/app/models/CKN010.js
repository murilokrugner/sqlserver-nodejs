/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CKN010', {
    CKN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CKN_MESEFD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CKN_ANOEFD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CKN_MESDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CKN_ANODIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CKN_INFCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
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
    CKN_MTCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'CKN010'
  });
};
