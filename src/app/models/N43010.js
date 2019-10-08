/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('N43010', {
    N43_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N43_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N43_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N43_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    N43_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N43_QUADRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N43_SETOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N43_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N43_PISO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N43_LADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N43_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N43_ESTILO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N43_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N43_TAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N43_ILU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N43_PAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N43_VLRJAZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N43_TAMMET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N43_ESTCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N43_CALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N43_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N43_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    }
  }, {
    tableName: 'N43010'
  });
};
